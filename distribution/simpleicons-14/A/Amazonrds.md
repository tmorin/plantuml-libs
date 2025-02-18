# Amazonrds


```text
simpleicons-14/A/Amazonrds
```

```text
include('simpleicons-14/A/Amazonrds')
```



| Illustration | Amazonrds |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amazonrds.png) | ![illustration for Amazonrds](../../simpleicons-14/A/Amazonrds.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonrdsXs>`
- `<$AmazonrdsSm>`
- `<$AmazonrdsMd>`
- `<$AmazonrdsLg>`





## Amazonrds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amazonrds
include('simpleicons-14/A/Amazonrds')

' renders the element
Amazonrds('Amazonrds', 'Amazonrds', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazonrds
include('simpleicons-14/A/Amazonrds')

' renders the element
Amazonrds('Amazonrds', 'Amazonrds', 'an optional tech label', 'an optional description')
@enduml
```

