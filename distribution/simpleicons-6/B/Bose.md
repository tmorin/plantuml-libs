# Bose


```text
simpleicons-6/B/Bose
```

```text
include('simpleicons-6/B/Bose')
```



| Illustration | Bose |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bose.png) | ![illustration for Bose](../../simpleicons-6/B/Bose.Local.png) |




## Bose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bose
include('simpleicons-6/B/Bose')

' renders the element
Bose('Bose', 'Bose', 'an optional tech label')
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

' loads the Item which embeds the element Bose
include('simpleicons-6/B/Bose')

' renders the element
Bose('Bose', 'Bose', 'an optional tech label')
@enduml
```

