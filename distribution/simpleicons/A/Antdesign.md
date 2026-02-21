# Antdesign


```text
simpleicons/A/Antdesign
```

```text
include('simpleicons/A/Antdesign')
```



| Illustration | Antdesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Antdesign.png) | ![illustration for Antdesign](../../simpleicons/A/Antdesign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AntdesignXs>`
- `<$AntdesignSm>`
- `<$AntdesignMd>`
- `<$AntdesignLg>`





## Antdesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Antdesign
include('simpleicons/A/Antdesign')

' renders the element
Antdesign('Antdesign', 'Antdesign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Antdesign
include('simpleicons/A/Antdesign')

' renders the element
Antdesign('Antdesign', 'Antdesign', 'an optional tech label', 'an optional description')
@enduml
```

