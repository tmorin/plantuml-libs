# Deutschebahn


```text
simpleicons-14/D/Deutschebahn
```

```text
include('simpleicons-14/D/Deutschebahn')
```



| Illustration | Deutschebahn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Deutschebahn.png) | ![illustration for Deutschebahn](../../simpleicons-14/D/Deutschebahn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeutschebahnXs>`
- `<$DeutschebahnSm>`
- `<$DeutschebahnMd>`
- `<$DeutschebahnLg>`





## Deutschebahn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Deutschebahn
include('simpleicons-14/D/Deutschebahn')

' renders the element
Deutschebahn('Deutschebahn', 'Deutschebahn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deutschebahn
include('simpleicons-14/D/Deutschebahn')

' renders the element
Deutschebahn('Deutschebahn', 'Deutschebahn', 'an optional tech label', 'an optional description')
@enduml
```

