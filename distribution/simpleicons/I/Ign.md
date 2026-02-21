# Ign


```text
simpleicons/I/Ign
```

```text
include('simpleicons/I/Ign')
```



| Illustration | Ign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Ign.png) | ![illustration for Ign](../../simpleicons/I/Ign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IgnXs>`
- `<$IgnSm>`
- `<$IgnMd>`
- `<$IgnLg>`





## Ign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ign
include('simpleicons/I/Ign')

' renders the element
Ign('Ign', 'Ign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ign
include('simpleicons/I/Ign')

' renders the element
Ign('Ign', 'Ign', 'an optional tech label', 'an optional description')
@enduml
```

