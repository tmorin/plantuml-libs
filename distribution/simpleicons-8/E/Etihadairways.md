# Etihadairways


```text
simpleicons-8/E/Etihadairways
```

```text
include('simpleicons-8/E/Etihadairways')
```



| Illustration | Etihadairways |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Etihadairways.png) | ![illustration for Etihadairways](../../simpleicons-8/E/Etihadairways.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EtihadairwaysXs>`
- `<$EtihadairwaysSm>`
- `<$EtihadairwaysMd>`
- `<$EtihadairwaysLg>`





## Etihadairways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Etihadairways
include('simpleicons-8/E/Etihadairways')

' renders the element
Etihadairways('Etihadairways', 'Etihadairways', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Etihadairways
include('simpleicons-8/E/Etihadairways')

' renders the element
Etihadairways('Etihadairways', 'Etihadairways', 'an optional tech label', 'an optional description')
@enduml
```

