# Elasticstack


```text
simpleicons-8/E/Elasticstack
```

```text
include('simpleicons-8/E/Elasticstack')
```



| Illustration | Elasticstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Elasticstack.png) | ![illustration for Elasticstack](../../simpleicons-8/E/Elasticstack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElasticstackXs>`
- `<$ElasticstackSm>`
- `<$ElasticstackMd>`
- `<$ElasticstackLg>`





## Elasticstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Elasticstack
include('simpleicons-8/E/Elasticstack')

' renders the element
Elasticstack('Elasticstack', 'Elasticstack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Elasticstack
include('simpleicons-8/E/Elasticstack')

' renders the element
Elasticstack('Elasticstack', 'Elasticstack', 'an optional tech label', 'an optional description')
@enduml
```

