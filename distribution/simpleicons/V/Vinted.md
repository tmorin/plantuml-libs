# Vinted


```text
simpleicons/V/Vinted
```

```text
include('simpleicons/V/Vinted')
```



| Illustration | Vinted |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vinted.png) | ![illustration for Vinted](../../simpleicons/V/Vinted.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VintedXs>`
- `<$VintedSm>`
- `<$VintedMd>`
- `<$VintedLg>`





## Vinted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vinted
include('simpleicons/V/Vinted')

' renders the element
Vinted('Vinted', 'Vinted', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vinted
include('simpleicons/V/Vinted')

' renders the element
Vinted('Vinted', 'Vinted', 'an optional tech label', 'an optional description')
@enduml
```

