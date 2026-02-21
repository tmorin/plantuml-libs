# Graphql


```text
simpleicons/G/Graphql
```

```text
include('simpleicons/G/Graphql')
```



| Illustration | Graphql |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Graphql.png) | ![illustration for Graphql](../../simpleicons/G/Graphql.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GraphqlXs>`
- `<$GraphqlSm>`
- `<$GraphqlMd>`
- `<$GraphqlLg>`





## Graphql

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Graphql
include('simpleicons/G/Graphql')

' renders the element
Graphql('Graphql', 'Graphql', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Graphql
include('simpleicons/G/Graphql')

' renders the element
Graphql('Graphql', 'Graphql', 'an optional tech label', 'an optional description')
@enduml
```

