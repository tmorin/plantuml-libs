# ChildFriendly


```text
material/Places/ChildFriendly
```

```text
include('material/Places/ChildFriendly')
```



| Illustration | ChildFriendly |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/ChildFriendly.png) | ![illustration for ChildFriendly](../../material/Places/ChildFriendly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChildFriendlyXs>`
- `<$ChildFriendlySm>`
- `<$ChildFriendlyMd>`
- `<$ChildFriendlyLg>`





## ChildFriendly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ChildFriendly
include('material/Places/ChildFriendly')

' renders the element
ChildFriendly('ChildFriendly', 'Child Friendly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChildFriendly
include('material/Places/ChildFriendly')

' renders the element
ChildFriendly('ChildFriendly', 'Child Friendly', 'an optional tech label', 'an optional description')
@enduml
```

