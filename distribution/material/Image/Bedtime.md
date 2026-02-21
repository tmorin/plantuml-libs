# Bedtime


```text
material/Image/Bedtime
```

```text
include('material/Image/Bedtime')
```



| Illustration | Bedtime |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Bedtime.png) | ![illustration for Bedtime](../../material/Image/Bedtime.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BedtimeXs>`
- `<$BedtimeSm>`
- `<$BedtimeMd>`
- `<$BedtimeLg>`





## Bedtime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Bedtime
include('material/Image/Bedtime')

' renders the element
Bedtime('Bedtime', 'Bedtime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bedtime
include('material/Image/Bedtime')

' renders the element
Bedtime('Bedtime', 'Bedtime', 'an optional tech label', 'an optional description')
@enduml
```

