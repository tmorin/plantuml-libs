# Dynatrace


```text
simpleicons-14/D/Dynatrace
```

```text
include('simpleicons-14/D/Dynatrace')
```



| Illustration | Dynatrace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dynatrace.png) | ![illustration for Dynatrace](../../simpleicons-14/D/Dynatrace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DynatraceXs>`
- `<$DynatraceSm>`
- `<$DynatraceMd>`
- `<$DynatraceLg>`





## Dynatrace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dynatrace
include('simpleicons-14/D/Dynatrace')

' renders the element
Dynatrace('Dynatrace', 'Dynatrace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dynatrace
include('simpleicons-14/D/Dynatrace')

' renders the element
Dynatrace('Dynatrace', 'Dynatrace', 'an optional tech label', 'an optional description')
@enduml
```

