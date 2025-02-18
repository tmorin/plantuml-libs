# Magisk


```text
simpleicons-14/M/Magisk
```

```text
include('simpleicons-14/M/Magisk')
```



| Illustration | Magisk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Magisk.png) | ![illustration for Magisk](../../simpleicons-14/M/Magisk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagiskXs>`
- `<$MagiskSm>`
- `<$MagiskMd>`
- `<$MagiskLg>`





## Magisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Magisk
include('simpleicons-14/M/Magisk')

' renders the element
Magisk('Magisk', 'Magisk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Magisk
include('simpleicons-14/M/Magisk')

' renders the element
Magisk('Magisk', 'Magisk', 'an optional tech label', 'an optional description')
@enduml
```

