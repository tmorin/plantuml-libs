# Keeweb


```text
simpleicons/K/Keeweb
```

```text
include('simpleicons/K/Keeweb')
```



| Illustration | Keeweb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Keeweb.png) | ![illustration for Keeweb](../../simpleicons/K/Keeweb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeewebXs>`
- `<$KeewebSm>`
- `<$KeewebMd>`
- `<$KeewebLg>`





## Keeweb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Keeweb
include('simpleicons/K/Keeweb')

' renders the element
Keeweb('Keeweb', 'Keeweb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Keeweb
include('simpleicons/K/Keeweb')

' renders the element
Keeweb('Keeweb', 'Keeweb', 'an optional tech label', 'an optional description')
@enduml
```

