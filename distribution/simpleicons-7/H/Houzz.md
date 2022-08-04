# Houzz


```text
simpleicons-7/H/Houzz
```

```text
include('simpleicons-7/H/Houzz')
```



| Illustration | Houzz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Houzz.png) | ![illustration for Houzz](../../simpleicons-7/H/Houzz.Local.png) |




## Houzz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Houzz
include('simpleicons-7/H/Houzz')

' renders the element
Houzz('Houzz', 'Houzz', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Houzz
include('simpleicons-7/H/Houzz')

' renders the element
Houzz('Houzz', 'Houzz', 'an optional tech label', 'an optional description')
@enduml
```

