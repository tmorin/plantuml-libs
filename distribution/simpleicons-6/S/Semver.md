# Semver


```text
simpleicons-6/S/Semver
```

```text
include('simpleicons-6/S/Semver')
```



| Illustration | Semver |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Semver.png) | ![illustration for Semver](../../simpleicons-6/S/Semver.Local.png) |




## Semver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Semver
include('simpleicons-6/S/Semver')

' renders the element
Semver('Semver', 'Semver', 'an optional tech label')
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

' loads the Item which embeds the element Semver
include('simpleicons-6/S/Semver')

' renders the element
Semver('Semver', 'Semver', 'an optional tech label')
@enduml
```

