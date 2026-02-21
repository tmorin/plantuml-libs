# RoundedCorner


```text
material/Action/RoundedCorner
```

```text
include('material/Action/RoundedCorner')
```



| Illustration | RoundedCorner |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/RoundedCorner.png) | ![illustration for RoundedCorner](../../material/Action/RoundedCorner.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoundedCornerXs>`
- `<$RoundedCornerSm>`
- `<$RoundedCornerMd>`
- `<$RoundedCornerLg>`





## RoundedCorner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RoundedCorner
include('material/Action/RoundedCorner')

' renders the element
RoundedCorner('RoundedCorner', 'Rounded Corner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RoundedCorner
include('material/Action/RoundedCorner')

' renders the element
RoundedCorner('RoundedCorner', 'Rounded Corner', 'an optional tech label', 'an optional description')
@enduml
```

