# NightsStay


```text
material/Social/NightsStay
```

```text
include('material/Social/NightsStay')
```



| Illustration | NightsStay |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/NightsStay.png) | ![illustration for NightsStay](../../material/Social/NightsStay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NightsStayXs>`
- `<$NightsStaySm>`
- `<$NightsStayMd>`
- `<$NightsStayLg>`





## NightsStay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NightsStay
include('material/Social/NightsStay')

' renders the element
NightsStay('NightsStay', 'Nights Stay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NightsStay
include('material/Social/NightsStay')

' renders the element
NightsStay('NightsStay', 'Nights Stay', 'an optional tech label', 'an optional description')
@enduml
```

