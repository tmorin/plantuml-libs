# AllInclusive


```text
material/Places/AllInclusive
```

```text
include('material/Places/AllInclusive')
```



| Illustration | AllInclusive |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/AllInclusive.png) | ![illustration for AllInclusive](../../material/Places/AllInclusive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AllInclusiveXs>`
- `<$AllInclusiveSm>`
- `<$AllInclusiveMd>`
- `<$AllInclusiveLg>`





## AllInclusive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AllInclusive
include('material/Places/AllInclusive')

' renders the element
AllInclusive('AllInclusive', 'All Inclusive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AllInclusive
include('material/Places/AllInclusive')

' renders the element
AllInclusive('AllInclusive', 'All Inclusive', 'an optional tech label', 'an optional description')
@enduml
```

