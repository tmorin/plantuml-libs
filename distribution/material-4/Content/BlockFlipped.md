# BlockFlipped


```text
material-4/Content/BlockFlipped
```

```text
include('material-4/Content/BlockFlipped')
```



| Illustration | BlockFlipped |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/BlockFlipped.png) | ![illustration for BlockFlipped](../../material-4/Content/BlockFlipped.Local.png) |




## BlockFlipped

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BlockFlipped
include('material-4/Content/BlockFlipped')

' renders the element
BlockFlipped('BlockFlipped', 'Block Flipped', 'an optional tech label')
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

' loads the Item which embeds the element BlockFlipped
include('material-4/Content/BlockFlipped')

' renders the element
BlockFlipped('BlockFlipped', 'Block Flipped', 'an optional tech label')
@enduml
```

