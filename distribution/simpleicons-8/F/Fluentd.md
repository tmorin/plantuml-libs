# Fluentd


```text
simpleicons-8/F/Fluentd
```

```text
include('simpleicons-8/F/Fluentd')
```



| Illustration | Fluentd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fluentd.png) | ![illustration for Fluentd](../../simpleicons-8/F/Fluentd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FluentdXs>`
- `<$FluentdSm>`
- `<$FluentdMd>`
- `<$FluentdLg>`





## Fluentd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fluentd
include('simpleicons-8/F/Fluentd')

' renders the element
Fluentd('Fluentd', 'Fluentd', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fluentd
include('simpleicons-8/F/Fluentd')

' renders the element
Fluentd('Fluentd', 'Fluentd', 'an optional tech label', 'an optional description')
@enduml
```

