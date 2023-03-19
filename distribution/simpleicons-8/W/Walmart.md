# Walmart


```text
simpleicons-8/W/Walmart
```

```text
include('simpleicons-8/W/Walmart')
```



| Illustration | Walmart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Walmart.png) | ![illustration for Walmart](../../simpleicons-8/W/Walmart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WalmartXs>`
- `<$WalmartSm>`
- `<$WalmartMd>`
- `<$WalmartLg>`





## Walmart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Walmart
include('simpleicons-8/W/Walmart')

' renders the element
Walmart('Walmart', 'Walmart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Walmart
include('simpleicons-8/W/Walmart')

' renders the element
Walmart('Walmart', 'Walmart', 'an optional tech label', 'an optional description')
@enduml
```

