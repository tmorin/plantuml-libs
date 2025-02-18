# Graylog


```text
simpleicons-14/G/Graylog
```

```text
include('simpleicons-14/G/Graylog')
```



| Illustration | Graylog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Graylog.png) | ![illustration for Graylog](../../simpleicons-14/G/Graylog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GraylogXs>`
- `<$GraylogSm>`
- `<$GraylogMd>`
- `<$GraylogLg>`





## Graylog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Graylog
include('simpleicons-14/G/Graylog')

' renders the element
Graylog('Graylog', 'Graylog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Graylog
include('simpleicons-14/G/Graylog')

' renders the element
Graylog('Graylog', 'Graylog', 'an optional tech label', 'an optional description')
@enduml
```

