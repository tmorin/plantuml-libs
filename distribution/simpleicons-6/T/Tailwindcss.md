# Tailwindcss


```text
simpleicons-6/T/Tailwindcss
```

```text
include('simpleicons-6/T/Tailwindcss')
```



| Illustration | Tailwindcss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tailwindcss.png) | ![illustration for Tailwindcss](../../simpleicons-6/T/Tailwindcss.Local.png) |




## Tailwindcss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tailwindcss
include('simpleicons-6/T/Tailwindcss')

' renders the element
Tailwindcss('Tailwindcss', 'Tailwindcss', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tailwindcss
include('simpleicons-6/T/Tailwindcss')

' renders the element
Tailwindcss('Tailwindcss', 'Tailwindcss', 'an optional tech label')
@enduml
```

