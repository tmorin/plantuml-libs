# Graphql


```text
simpleicons-5/G/Graphql
```

```text
include('simpleicons-5/G/Graphql')
```



| Illustration | Graphql |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Graphql.png) | ![illustration for Graphql](../../simpleicons-5/G/Graphql.Local.png) |




## Graphql

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Graphql
include('simpleicons-5/G/Graphql')

' renders the element
Graphql('Graphql', 'Graphql', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Graphql
include('simpleicons-5/G/Graphql')

' renders the element
Graphql('Graphql', 'Graphql', 'an optional tech label')
@enduml
```

