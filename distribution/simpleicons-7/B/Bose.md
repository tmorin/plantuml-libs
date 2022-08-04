# Bose


```text
simpleicons-7/B/Bose
```

```text
include('simpleicons-7/B/Bose')
```



| Illustration | Bose |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bose.png) | ![illustration for Bose](../../simpleicons-7/B/Bose.Local.png) |




## Bose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bose
include('simpleicons-7/B/Bose')

' renders the element
Bose('Bose', 'Bose', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bose
include('simpleicons-7/B/Bose')

' renders the element
Bose('Bose', 'Bose', 'an optional tech label', 'an optional description')
@enduml
```

