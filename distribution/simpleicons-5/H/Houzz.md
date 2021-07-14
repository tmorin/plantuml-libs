# Houzz


```text
simpleicons-5/H/Houzz
```

```text
include('simpleicons-5/H/Houzz')
```



| Illustration | Houzz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Houzz.png) | ![illustration for Houzz](../../simpleicons-5/H/Houzz.Local.png) |




## Houzz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Houzz
include('simpleicons-5/H/Houzz')

' renders the element
Houzz('Houzz', 'Houzz', 'an optional tech label')
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

' loads the Item which embeds the element Houzz
include('simpleicons-5/H/Houzz')

' renders the element
Houzz('Houzz', 'Houzz', 'an optional tech label')
@enduml
```

