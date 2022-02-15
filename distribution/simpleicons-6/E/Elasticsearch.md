# Elasticsearch


```text
simpleicons-6/E/Elasticsearch
```

```text
include('simpleicons-6/E/Elasticsearch')
```



| Illustration | Elasticsearch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Elasticsearch.png) | ![illustration for Elasticsearch](../../simpleicons-6/E/Elasticsearch.Local.png) |




## Elasticsearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Elasticsearch
include('simpleicons-6/E/Elasticsearch')

' renders the element
Elasticsearch('Elasticsearch', 'Elasticsearch', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Elasticsearch
include('simpleicons-6/E/Elasticsearch')

' renders the element
Elasticsearch('Elasticsearch', 'Elasticsearch', 'an optional tech label')
@enduml
```

