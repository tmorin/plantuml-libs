# NaturePeople


```text
material/Image/NaturePeople
```

```text
include('material/Image/NaturePeople')
```



| Illustration | NaturePeople |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/NaturePeople.png) | ![illustration for NaturePeople](../../material/Image/NaturePeople.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NaturePeopleXs>`
- `<$NaturePeopleSm>`
- `<$NaturePeopleMd>`
- `<$NaturePeopleLg>`





## NaturePeople

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NaturePeople
include('material/Image/NaturePeople')

' renders the element
NaturePeople('NaturePeople', 'Nature People', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NaturePeople
include('material/Image/NaturePeople')

' renders the element
NaturePeople('NaturePeople', 'Nature People', 'an optional tech label', 'an optional description')
@enduml
```

