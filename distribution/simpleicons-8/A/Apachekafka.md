# Apachekafka


```text
simpleicons-8/A/Apachekafka
```

```text
include('simpleicons-8/A/Apachekafka')
```



| Illustration | Apachekafka |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Apachekafka.png) | ![illustration for Apachekafka](../../simpleicons-8/A/Apachekafka.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachekafkaXs>`
- `<$ApachekafkaSm>`
- `<$ApachekafkaMd>`
- `<$ApachekafkaLg>`





## Apachekafka

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apachekafka
include('simpleicons-8/A/Apachekafka')

' renders the element
Apachekafka('Apachekafka', 'Apachekafka', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachekafka
include('simpleicons-8/A/Apachekafka')

' renders the element
Apachekafka('Apachekafka', 'Apachekafka', 'an optional tech label', 'an optional description')
@enduml
```

