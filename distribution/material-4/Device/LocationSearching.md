# LocationSearching


```text
material-4/Device/LocationSearching
```

```text
include('material-4/Device/LocationSearching')
```



| Illustration | LocationSearching |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/LocationSearching.png) | ![illustration for LocationSearching](../../material-4/Device/LocationSearching.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocationSearchingXs>`
- `<$LocationSearchingSm>`
- `<$LocationSearchingMd>`
- `<$LocationSearchingLg>`





## LocationSearching

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocationSearching
include('material-4/Device/LocationSearching')

' renders the element
LocationSearching('LocationSearching', 'Location Searching', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element LocationSearching
include('material-4/Device/LocationSearching')

' renders the element
LocationSearching('LocationSearching', 'Location Searching', 'an optional tech label', 'an optional description')
@enduml
```

