# Tesco


```text
simpleicons/T/Tesco
```

```text
include('simpleicons/T/Tesco')
```



| Illustration | Tesco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tesco.png) | ![illustration for Tesco](../../simpleicons/T/Tesco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TescoXs>`
- `<$TescoSm>`
- `<$TescoMd>`
- `<$TescoLg>`





## Tesco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tesco
include('simpleicons/T/Tesco')

' renders the element
Tesco('Tesco', 'Tesco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tesco
include('simpleicons/T/Tesco')

' renders the element
Tesco('Tesco', 'Tesco', 'an optional tech label', 'an optional description')
@enduml
```

