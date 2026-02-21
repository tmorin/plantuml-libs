# House


```text
fontawesome/Solid/House
```

```text
include('fontawesome/Solid/House')
```



| Illustration | House |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/House.png) | ![illustration for House](../../fontawesome/Solid/House.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element House
include('fontawesome/Solid/House')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element House
include('fontawesome/Solid/House')

' renders the element
House('House', 'House', 'an optional tech label', 'an optional description')
@enduml
```

