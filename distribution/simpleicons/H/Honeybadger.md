# Honeybadger


```text
simpleicons/H/Honeybadger
```

```text
include('simpleicons/H/Honeybadger')
```



| Illustration | Honeybadger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Honeybadger.png) | ![illustration for Honeybadger](../../simpleicons/H/Honeybadger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HoneybadgerXs>`
- `<$HoneybadgerSm>`
- `<$HoneybadgerMd>`
- `<$HoneybadgerLg>`





## Honeybadger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Honeybadger
include('simpleicons/H/Honeybadger')

' renders the element
Honeybadger('Honeybadger', 'Honeybadger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Honeybadger
include('simpleicons/H/Honeybadger')

' renders the element
Honeybadger('Honeybadger', 'Honeybadger', 'an optional tech label', 'an optional description')
@enduml
```

