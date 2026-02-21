# DateRange


```text
material/Action/DateRange
```

```text
include('material/Action/DateRange')
```



| Illustration | DateRange |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/DateRange.png) | ![illustration for DateRange](../../material/Action/DateRange.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DateRangeXs>`
- `<$DateRangeSm>`
- `<$DateRangeMd>`
- `<$DateRangeLg>`





## DateRange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DateRange
include('material/Action/DateRange')

' renders the element
DateRange('DateRange', 'Date Range', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DateRange
include('material/Action/DateRange')

' renders the element
DateRange('DateRange', 'Date Range', 'an optional tech label', 'an optional description')
@enduml
```

