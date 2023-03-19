# CartFlatbed


```text
fontawesome-6/Solid/CartFlatbed
```

```text
include('fontawesome-6/Solid/CartFlatbed')
```



| Illustration | CartFlatbed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CartFlatbed.png) | ![illustration for CartFlatbed](../../fontawesome-6/Solid/CartFlatbed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CartFlatbedXs>`
- `<$CartFlatbedSm>`
- `<$CartFlatbedMd>`
- `<$CartFlatbedLg>`





## CartFlatbed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CartFlatbed
include('fontawesome-6/Solid/CartFlatbed')

' renders the element
CartFlatbed('CartFlatbed', 'Cart Flatbed', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CartFlatbed
include('fontawesome-6/Solid/CartFlatbed')

' renders the element
CartFlatbed('CartFlatbed', 'Cart Flatbed', 'an optional tech label', 'an optional description')
@enduml
```

