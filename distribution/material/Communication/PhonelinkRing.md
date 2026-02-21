# PhonelinkRing


```text
material/Communication/PhonelinkRing
```

```text
include('material/Communication/PhonelinkRing')
```



| Illustration | PhonelinkRing |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/PhonelinkRing.png) | ![illustration for PhonelinkRing](../../material/Communication/PhonelinkRing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhonelinkRingXs>`
- `<$PhonelinkRingSm>`
- `<$PhonelinkRingMd>`
- `<$PhonelinkRingLg>`





## PhonelinkRing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhonelinkRing
include('material/Communication/PhonelinkRing')

' renders the element
PhonelinkRing('PhonelinkRing', 'Phonelink Ring', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhonelinkRing
include('material/Communication/PhonelinkRing')

' renders the element
PhonelinkRing('PhonelinkRing', 'Phonelink Ring', 'an optional tech label', 'an optional description')
@enduml
```

