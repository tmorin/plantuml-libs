# FreeBreakfast


```text
material/Places/FreeBreakfast
```

```text
include('material/Places/FreeBreakfast')
```



| Illustration | FreeBreakfast |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/FreeBreakfast.png) | ![illustration for FreeBreakfast](../../material/Places/FreeBreakfast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreeBreakfastXs>`
- `<$FreeBreakfastSm>`
- `<$FreeBreakfastMd>`
- `<$FreeBreakfastLg>`





## FreeBreakfast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FreeBreakfast
include('material/Places/FreeBreakfast')

' renders the element
FreeBreakfast('FreeBreakfast', 'Free Breakfast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FreeBreakfast
include('material/Places/FreeBreakfast')

' renders the element
FreeBreakfast('FreeBreakfast', 'Free Breakfast', 'an optional tech label', 'an optional description')
@enduml
```

