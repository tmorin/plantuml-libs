# Supabase


```text
simpleicons-14/S/Supabase
```

```text
include('simpleicons-14/S/Supabase')
```



| Illustration | Supabase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Supabase.png) | ![illustration for Supabase](../../simpleicons-14/S/Supabase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SupabaseXs>`
- `<$SupabaseSm>`
- `<$SupabaseMd>`
- `<$SupabaseLg>`





## Supabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Supabase
include('simpleicons-14/S/Supabase')

' renders the element
Supabase('Supabase', 'Supabase', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Supabase
include('simpleicons-14/S/Supabase')

' renders the element
Supabase('Supabase', 'Supabase', 'an optional tech label', 'an optional description')
@enduml
```

