# Ign


```text
simpleicons-14/I/Ign
```

```text
include('simpleicons-14/I/Ign')
```



| Illustration | Ign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Ign.png) | ![illustration for Ign](../../simpleicons-14/I/Ign.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ign
include('simpleicons-14/I/Ign')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ign
include('simpleicons-14/I/Ign')

' renders the element
Ign('Ign', 'Ign', 'an optional tech label', 'an optional description')
@enduml
```

