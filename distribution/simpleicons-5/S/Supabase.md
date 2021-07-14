# Supabase


```text
simpleicons-5/S/Supabase
```

```text
include('simpleicons-5/S/Supabase')
```



| Illustration | Supabase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Supabase.png) | ![illustration for Supabase](../../simpleicons-5/S/Supabase.Local.png) |




## Supabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Supabase
include('simpleicons-5/S/Supabase')

' renders the element
Supabase('Supabase', 'Supabase', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Supabase
include('simpleicons-5/S/Supabase')

' renders the element
Supabase('Supabase', 'Supabase', 'an optional tech label')
@enduml
```

