# Rtt


```text
material/Communication/Rtt
```

```text
include('material/Communication/Rtt')
```



| Illustration | Rtt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Rtt.png) | ![illustration for Rtt](../../material/Communication/Rtt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RttXs>`
- `<$RttSm>`
- `<$RttMd>`
- `<$RttLg>`





## Rtt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Rtt
include('material/Communication/Rtt')

' renders the element
Rtt('Rtt', 'Rtt', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Rtt
include('material/Communication/Rtt')

' renders the element
Rtt('Rtt', 'Rtt', 'an optional tech label', 'an optional description')
@enduml
```

