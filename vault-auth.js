(function(){
  const ready = window.supabase && window.VAULT_SUPABASE_URL && window.VAULT_SUPABASE_PUBLISHABLE_KEY;
  if(!ready){ console.error('VAULT Supabase configuration missing.'); return; }
  window.vaultSupabase = window.supabase.createClient(window.VAULT_SUPABASE_URL, window.VAULT_SUPABASE_PUBLISHABLE_KEY, { auth: { flowType: 'pkce', detectSessionInUrl: false, persistSession: true, autoRefreshToken: true } });
  window.VAULT_AUTH = {
    client: window.vaultSupabase,
    async session(){ const {data,error}=await window.vaultSupabase.auth.getSession(); if(error) throw error; return data.session; },
    async user(){ const {data,error}=await window.vaultSupabase.auth.getUser(); if(error) return null; return data.user; },
    async signInEmail(email,password){ return window.vaultSupabase.auth.signInWithPassword({email,password}); },
    async signUp(email,password){ return window.vaultSupabase.auth.signUp({email,password, options:{emailRedirectTo: location.origin + '/login.html'}}); },
    async signInGoogle(next=''){ const target = location.origin + '/auth-callback.html' + (next ? ('?next=' + encodeURIComponent(next)) : ''); return window.vaultSupabase.auth.signInWithOAuth({provider:'google', options:{redirectTo: target}}); },
    async resetPassword(email){ return window.vaultSupabase.auth.resetPasswordForEmail(email,{redirectTo:location.origin+'/login.html?reset=1'}); },
    async updatePassword(password){ return window.vaultSupabase.auth.updateUser({password}); },
    async resendConfirmation(email){ return window.vaultSupabase.auth.resend({type:'signup', email, options:{emailRedirectTo:location.origin+'/login.html'}}); },
    async subscribeNewsletter(email){ return window.vaultSupabase.from('newsletter_subscribers').upsert({email:email.toLowerCase().trim()},{onConflict:'email', ignoreDuplicates:true}); },
    async signOut(){ return window.vaultSupabase.auth.signOut(); },
    async ensureProfile(user){
      if(!user) return;
      const payload={id:user.id,email:user.email||null,full_name:user.user_metadata?.full_name||user.user_metadata?.name||null,avatar_url:user.user_metadata?.avatar_url||null};
      const {error}=await window.vaultSupabase.from('profiles').upsert(payload,{onConflict:'id'});
      if(error) console.warn('Profile sync:',error.message);
    },
    async saveLook(userId,look){
      return window.vaultSupabase.from('saved_looks').insert({user_id:userId,look_id:look.id});
    },
    async removeLook(userId,lookId){
      return window.vaultSupabase.from('saved_looks').delete().eq('user_id',userId).eq('look_id',lookId);
    },
    async savedLookIds(userId){
      return window.vaultSupabase.from('saved_looks').select('look_id').eq('user_id',userId);
    },
    async activity(userId,lookId,action){
      return window.vaultSupabase.from('look_activity').insert({user_id:userId,look_id:lookId,action});
    }
  };
  window.dispatchEvent(new Event('vault-auth-ready'));
})();
