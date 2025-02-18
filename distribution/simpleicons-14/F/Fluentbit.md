# Fluentbit


```text
simpleicons-14/F/Fluentbit
```

```text
include('simpleicons-14/F/Fluentbit')
```



| Illustration | Fluentbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fluentbit.png) | ![illustration for Fluentbit](../../simpleicons-14/F/Fluentbit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FluentbitXs>`
- `<$FluentbitSm>`
- `<$FluentbitMd>`
- `<$FluentbitLg>`





## Fluentbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fluentbit
include('simpleicons-14/F/Fluentbit')

' renders the element
Fluentbit('Fluentbit', 'Fluentbit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fluentbit
include('simpleicons-14/F/Fluentbit')

' renders the element
Fluentbit('Fluentbit', 'Fluentbit', 'an optional tech label', 'an optional description')
@enduml
```

