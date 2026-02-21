# _365Datascience


```text
simpleicons-14/_/_365Datascience
```

```text
include('simpleicons-14/_/_365Datascience')
```



| Illustration | _365Datascience |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/_/_365Datascience.png) | ![illustration for _365Datascience](../../simpleicons-14/_/_365Datascience.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_365DatascienceXs>`
- `<$_365DatascienceSm>`
- `<$_365DatascienceMd>`
- `<$_365DatascienceLg>`





## _365Datascience

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element _365Datascience
include('simpleicons-14/_/_365Datascience')

' renders the element
_365Datascience('365datascience', '365datascience', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element _365Datascience
include('simpleicons-14/_/_365Datascience')

' renders the element
_365Datascience('365datascience', '365datascience', 'an optional tech label', 'an optional description')
@enduml
```

