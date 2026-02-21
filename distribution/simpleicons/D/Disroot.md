# Disroot


```text
simpleicons/D/Disroot
```

```text
include('simpleicons/D/Disroot')
```



| Illustration | Disroot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Disroot.png) | ![illustration for Disroot](../../simpleicons/D/Disroot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DisrootXs>`
- `<$DisrootSm>`
- `<$DisrootMd>`
- `<$DisrootLg>`





## Disroot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Disroot
include('simpleicons/D/Disroot')

' renders the element
Disroot('Disroot', 'Disroot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Disroot
include('simpleicons/D/Disroot')

' renders the element
Disroot('Disroot', 'Disroot', 'an optional tech label', 'an optional description')
@enduml
```

