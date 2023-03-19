# Fitbit


```text
simpleicons-8/F/Fitbit
```

```text
include('simpleicons-8/F/Fitbit')
```



| Illustration | Fitbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fitbit.png) | ![illustration for Fitbit](../../simpleicons-8/F/Fitbit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FitbitXs>`
- `<$FitbitSm>`
- `<$FitbitMd>`
- `<$FitbitLg>`





## Fitbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fitbit
include('simpleicons-8/F/Fitbit')

' renders the element
Fitbit('Fitbit', 'Fitbit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fitbit
include('simpleicons-8/F/Fitbit')

' renders the element
Fitbit('Fitbit', 'Fitbit', 'an optional tech label', 'an optional description')
@enduml
```

