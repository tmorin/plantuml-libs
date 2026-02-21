# LocationArrow


```text
fontawesome/Solid/LocationArrow
```

```text
include('fontawesome/Solid/LocationArrow')
```



| Illustration | LocationArrow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LocationArrow.png) | ![illustration for LocationArrow](../../fontawesome/Solid/LocationArrow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocationArrowXs>`
- `<$LocationArrowSm>`
- `<$LocationArrowMd>`
- `<$LocationArrowLg>`





## LocationArrow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LocationArrow
include('fontawesome/Solid/LocationArrow')

' renders the element
LocationArrow('LocationArrow', 'Location Arrow', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element LocationArrow
include('fontawesome/Solid/LocationArrow')

' renders the element
LocationArrow('LocationArrow', 'Location Arrow', 'an optional tech label', 'an optional description')
@enduml
```

