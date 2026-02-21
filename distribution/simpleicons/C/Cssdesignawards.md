# Cssdesignawards


```text
simpleicons/C/Cssdesignawards
```

```text
include('simpleicons/C/Cssdesignawards')
```



| Illustration | Cssdesignawards |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cssdesignawards.png) | ![illustration for Cssdesignawards](../../simpleicons/C/Cssdesignawards.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CssdesignawardsXs>`
- `<$CssdesignawardsSm>`
- `<$CssdesignawardsMd>`
- `<$CssdesignawardsLg>`





## Cssdesignawards

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cssdesignawards
include('simpleicons/C/Cssdesignawards')

' renders the element
Cssdesignawards('Cssdesignawards', 'Cssdesignawards', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cssdesignawards
include('simpleicons/C/Cssdesignawards')

' renders the element
Cssdesignawards('Cssdesignawards', 'Cssdesignawards', 'an optional tech label', 'an optional description')
@enduml
```

