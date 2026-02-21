# Silverairways


```text
simpleicons-14/S/Silverairways
```

```text
include('simpleicons-14/S/Silverairways')
```



| Illustration | Silverairways |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Silverairways.png) | ![illustration for Silverairways](../../simpleicons-14/S/Silverairways.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SilverairwaysXs>`
- `<$SilverairwaysSm>`
- `<$SilverairwaysMd>`
- `<$SilverairwaysLg>`





## Silverairways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Silverairways
include('simpleicons-14/S/Silverairways')

' renders the element
Silverairways('Silverairways', 'Silverairways', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Silverairways
include('simpleicons-14/S/Silverairways')

' renders the element
Silverairways('Silverairways', 'Silverairways', 'an optional tech label', 'an optional description')
@enduml
```

