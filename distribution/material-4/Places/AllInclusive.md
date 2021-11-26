# AllInclusive


```text
material-4/Places/AllInclusive
```

```text
include('material-4/Places/AllInclusive')
```



| Illustration | AllInclusive |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/AllInclusive.png) | ![illustration for AllInclusive](../../material-4/Places/AllInclusive.Local.png) |




## AllInclusive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AllInclusive
include('material-4/Places/AllInclusive')

' renders the element
AllInclusive('AllInclusive', 'All Inclusive', 'an optional tech label')
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

' loads the Item which embeds the element AllInclusive
include('material-4/Places/AllInclusive')

' renders the element
AllInclusive('AllInclusive', 'All Inclusive', 'an optional tech label')
@enduml
```

