# Semver


```text
simpleicons/S/Semver
```

```text
include('simpleicons/S/Semver')
```



| Illustration | Semver |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Semver.png) | ![illustration for Semver](../../simpleicons/S/Semver.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SemverXs>`
- `<$SemverSm>`
- `<$SemverMd>`
- `<$SemverLg>`





## Semver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Semver
include('simpleicons/S/Semver')

' renders the element
Semver('Semver', 'Semver', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Semver
include('simpleicons/S/Semver')

' renders the element
Semver('Semver', 'Semver', 'an optional tech label', 'an optional description')
@enduml
```

