# House


```text
material-4/Places/House
```

```text
include('material-4/Places/House')
```



| Illustration | House |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/House.png) | ![illustration for House](../../material-4/Places/House.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseXs>`
- `<$HouseSm>`
- `<$HouseMd>`
- `<$HouseLg>`





## House

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element House
include('material-4/Places/House')

' renders the element
House('House', 'House', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element House
include('material-4/Places/House')

' renders the element
House('House', 'House', 'an optional tech label', 'an optional description')
@enduml
```

