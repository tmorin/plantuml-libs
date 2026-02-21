# House


```text
material/Places/House
```

```text
include('material/Places/House')
```



| Illustration | House |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/House.png) | ![illustration for House](../../material/Places/House.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element House
include('material/Places/House')

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
include('material/bootstrap')

' loads the Item which embeds the element House
include('material/Places/House')

' renders the element
House('House', 'House', 'an optional tech label', 'an optional description')
@enduml
```

